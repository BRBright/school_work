const firstObject = {
  raining: true,
  noise: "Woof!",
  makeNoise: function() {
    if (this.raining) {
      console.log(this.noise);
    }
  }
};

const catObject = {
  raining: false,
  noise: "Meow!",
  makeNoise: () => {
    if (this.raining) {
      console.log(this.noise);
    }
  }
};

firstObject.makeNoise();
catObject.makeNoise();
