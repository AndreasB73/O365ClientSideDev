export class Util {
  log() {
    console.log("hello word logged from Util");
    }

  get(url: string) {
    console.log("fetching...");
      
      var cctx = new SP.ClientContext(url);  
      var web = cctx.get_web();
      cctx.load(web);

      cctx.executeQueryAsync(() => {
          console.log("Successfully loaded web", web.get_title());
      });


  }
}
