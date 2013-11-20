describe("a bus", function(){
  var bus, passenger, passenger2;

  beforeEach(function(){
    bus = new Bus();
    passenger = { name: "Levon Helm" };
    passenger2 = { name: "Yoko Ono" };
  });


  it("is empty", function(){
    expect(bus.isEmpty()).toBe(true);
  });

  it("accepts a passenger", function(){
    bus.add(passenger);
    expect(bus.isEmpty()).not.toBe(true);
  });

  it("returns true if it contains a specific passenger", function() {
    bus.add(passenger);
    expect(bus.contains(passenger)).toBe(true);
  });

  it("accepts multiple passengers", function(){
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    bus.add(passenger2);
    expect(bus.getSize()).toBeGreaterThan(1);
  });

  it("won't accept the same paassenger twice and throws and error", function(){
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
        // by wrapping this inside a function it's not being invoked
    // then when it comes to the expect it will be called
    var test = function(){
      add(passenger);
    };
    expect(bus.getSize()).toBeLessThan(2);
  });

  it("returns a list of passengers names", function(){
    bus.add(passenger);
    bus.add(passenger2);
    expect(bus.getPassengers()).toEqual(["Levon Helm", "Yoko Ono"]);
  });

});

