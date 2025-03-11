import assert from "assert";
import { 
  TestHelpers,
  BeanExchangeFactory_PairCreated
} from "generated";
const { MockDb, BeanExchangeFactory } = TestHelpers;

describe("BeanExchangeFactory contract PairCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for BeanExchangeFactory contract PairCreated event
  const event = BeanExchangeFactory.PairCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("BeanExchangeFactory_PairCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await BeanExchangeFactory.PairCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBeanExchangeFactoryPairCreated = mockDbUpdated.entities.BeanExchangeFactory_PairCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBeanExchangeFactoryPairCreated: BeanExchangeFactory_PairCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      token0: event.params.token0,
      token1: event.params.token1,
      pair: event.params.pair,
      _3: event.params._3,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBeanExchangeFactoryPairCreated, expectedBeanExchangeFactoryPairCreated, "Actual BeanExchangeFactoryPairCreated should be the same as the expectedBeanExchangeFactoryPairCreated");
  });
});
