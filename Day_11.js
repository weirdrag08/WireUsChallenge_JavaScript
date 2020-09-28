//Function: With objects we can place a function in the value part for a key.So when the associated key is used, it can be called like a function.
var headphones = {
  Brand: "Boat",
  Model: "BoAt Rockerz 600 Black",
  Color: "Black",
  Price: "Rs. 3990",
  Compatible_devices: "iPhone, iPod, iPad, Android, Window, Most of Bluetooth Devices",
  Special_features: "Wireless",
  Weight: "281g",
  Battery_description: "Li-polymer",
  Battery_average_life: "8 Hours",
  Availaibility: "Boat-lifestyle, Amazon, Flipkart, Reliance digital, Chroma, eBay",
  message: function () {
      document.write("<strong>" + "Brand:" + "</strong>" + this.Brand + "<br>");
      document.write("<strong>" + "Model: " + "</strong>" + this.Model + "<br>");
      document.write("<strong>" + "Color: " + "</strong>" + this.Color + "<br>");
      document.write("<strong>" + "Price: " + "</strong>" + this.Price + "<br>");
      document.write("<strong>" + "Compatible devices: " + "</strong>" + this.Compatible_devices + "<br>");
      document.write("<strong>" + "Special features: " + "</strong>" + this.Weight + "<br>");
      document.write("<strong>" + "Weight: " + "</strong>" + this.Weight + "<br>");
      document.write("<strong>" + "Battery description: " + "</strong>" + this.Battery_description + "<br>");
      document.write("<strong>" + "Battery average life: " + "</strong>" + this.Battery_average_life + "<br>");
      document.write("<strong>" + "Availaibility: " + "</strong>" + this.Availaibility + "<br>");
  }
};


