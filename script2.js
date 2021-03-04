var page = require('webpage').create();
url= "http://conn.internet.nl/connection/"

page.open(url, function(status) {
    setTimeout(function() {
    page.render('result.png');
  var score_report = page.evaluate(function() {
    return document.getElementById("testresults-overview").textContent;
  });
  console.log("*******Connection test*******")
  console.log("Score: " +score_report.replace(/\s+/g, ' ').split(" ")[10]);
  console.log("More details on result.png")
  //console.log("Passed: " +score_report.replace(/\s+/g, ' ').split(" ")[14]+" "+score_report.replace(/\s+/g, ' ').split(" ")[15]+" "+score_report.replace(/\s+/g, ' ').split(" ")[16]+" "+score_report.replace(/\s+/g, ' ').split(" ")[17]);
  //console.log("Failed: "+score_report.replace(/\s+/g, ' ').split(" ")[19]+" "+score_report.replace(/\s+/g, ' ').split(" ")[20]+" "+score_report.replace(/\s+/g, ' ').split(" ")[21]+" "+score_report.replace(/\s+/g, ' ').split(" ")[22]+" "+score_report.replace(/\s+/g, ' ').split(" ")[23]+" "+score_report.replace(/\s+/g, ' ').split(" ")[24]);
  phantom.exit();
}, 2000);
});