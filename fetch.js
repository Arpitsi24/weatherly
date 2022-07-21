class Fetch {
  async getCurrent(input) {
    const myKey = "53f47b6fa205c2f19d2a024888e529d8";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const dataCurrent = await response.json();

    console.log(dataCurrent);

    return dataCurrent;
  }
}
