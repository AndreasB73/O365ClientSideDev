
export class Util {
  log() {
    console.log("hello word logged from Util");
  }

  async get(url: string) {
    console.log("fetching...");    

    let response = await fetch(url);
    let result = await response.json();
    console.log("data received: ");
    console.log(result);    
  }

}
