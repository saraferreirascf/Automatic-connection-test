const {Builder, By, Key, util} = require ("selenium-webdriver");
//const html2canvas = require('html2canvas');
//const puppeteer = require("puppeteer");

async function test_website() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://internet.nl/");
    await driver.findElement(By.name("url")).sendKeys("https://teste-osse-isoc-amen.pt/",Key.RETURN);

    html2canvas(document.body).then(function(canvas) {
      // Export the canvas to its data URI representation
      var base64image = canvas.toDataURL("image/png");
  
      // Open the image in a new window
      window.open(base64image , "_blank");
    });
}

async function test_mail() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://internet.nl/");
    await driver.findElement(By.className("email")).sendKeys("test@teste-osse-isoc-amen.pt",Key.RETURN);
    console.log(driver)
}

async function test_conn() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("http://conn.internet.nl/connection/");
  //await driver.findElement(By.className("email")).sendKeys("test@teste-osse-isoc-amen.pt",Key.RETURN);
  
}

/* async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http:///stackoverflow.com", {
    waitUntil: "networkidle0",
  });
  console.log(page)
  const pdf = await page.pdf({
    width: 1200,
    height: 1920,
    pageRanges: "1-2",
    path: "so.pdf",
  });

  await browser.close();
  return pdf;
} */


//test_website()
//printPDF();
//test_mail()
test_conn();
