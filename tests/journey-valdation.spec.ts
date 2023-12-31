import { test, expect } from '@playwright/test';
import * as lookup from './lookup.json'

test('Personal Details', async ({ page }) => {
  await page.goto('https://onlineinsuranceuat.canarahsbclife.com/iSelectSmart360/?source=canara');
  let apiUrlStatus = false
  page.on('response', response => {
  if(response.url().includes("https://api-onlineinsuranceuat.canarahsbclife.com/isnp-api/")){
    console.log('<<', response.status(), response.url())
  }});
  const response = await page.waitForResponse(response => response.url().includes('https://api-onlineinsuranceuat.canarahsbclife.com/isnp-api/policy-all-inputs-quotation'));
  expect(response.status()).toBe(200);
      await page.getByPlaceholder('Enter Name').click();
      await page.getByPlaceholder('Enter Name').fill(lookup.personalDetails.name);
      await page.getByPlaceholder('Enter Name').press('Tab');
      await page.getByPlaceholder('Enter your email').fill(lookup.personalDetails.email);
      await page.getByPlaceholder('Enter your email').press('Tab');
      await page.locator('#react-select-2-input').press('Tab');
      await page.getByPlaceholder('Enter your Mobile Number').fill(lookup.personalDetails.mobile);
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('path').nth(1).click();
      await page.getByRole('combobox').first().selectOption('2000');
      await page.getByRole('combobox').nth(1).selectOption('July');
      await page.getByLabel('Choose Sunday, July 16th, 2000').click();
      await page.getByText('Educational Qualification').click();
      await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
      await page.getByText('GRADUATE', { exact: true }).click();
      await page.getByPlaceholder('Type Here').click();
      await page.getByPlaceholder('Type Here').fill('122,2222');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByPlaceholder('Enter pin code').click();
      await page.getByPlaceholder('Enter pin code').fill('247001');
      await page.getByPlaceholder('Enter pin code').press('Tab');
      await page.locator('#react-select-8-input').press('Tab');
      await page.locator('#react-select-9-input').press('Tab');
      await page.locator('#react-select-10-input').press('ArrowDown');
      await page.locator('#react-select-10-input').press('Enter');
      await page.locator('#react-select-10-input').press('Tab');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();;
      await page.getByRole('button', { name: 'Proceed' }).click();;
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('#OTPverify').getByText('Skip').click();
      await page.waitForTimeout(3000);
      await page.locator('#OTPverify').getByText('Skip').click();
      await page.waitForTimeout(4000);
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Pay Now' }).click();
      await page.waitForNavigation({ timeout: 10000 });
      //await page.goto('https://paymentuat.canarahsbclife.com/cpg/payment-method?rd=171bad541f52b21d6920f7dbb67f2a9bab96d7ffdb088b529819ad80430d85a1acc73bc4cd39d317102c16a47d47d94b3bfa72c6df4c6962fa758fb97e5efe0aaad8c662e2901f440025194194cff7a57ea751ef30d3fe2d8a14dbc2bf96ee6cba8fbf724aae11fc94037dbc8d3e97c1baeacfe2bce577fb42cb083eeaebfacc012b4ce2386a941674a822b7d0a982d79a9cdcf9c301b4e99c96476e450a1efbdb2558601666d458d085268619060b694d44fe560eb6ba122bc4f1cba4f88ca84af55416e0c4f261f4d0b14863652e021b51608e3781ca73bac8c89ecf54d9edd328b918db869d44c0386f91afd127ae7a5a2204be7139839006735cdf3b5b1e116ba240c3b996e05b5b778463e9f12d61316f279deb32944597af31ef7237de6ac6ea2a3b0a12db2f60fe601b619c295eac05d583fec2fe184f2ba67f53700c595da4cb9acc5b67823745a8a1b90df42c6caf460aab3a6cd2758b82c7ab87e7452162226d97e4c0a0e973a25f5240190b3c3cd738c0570aa8bba047f8af46759929903019220439018bdefc5bee18c86cd480fda528aa3da217f109829e95d218826490d515c8e34a7a8c2ebb569a0700c034a83646ab85d3aa0cf8694dba0a68f082c0b3d73f31318e596a725a30ea936e59f29d5d6ed13c71a24bbcf415fb83f60e3fccf2c32f8da3ed88c09f7a31149311d69be00d24c13dd9af546fce691c4a64b3a8541218c0097d4d6dd006ac3cedb427a6ba5555c62ef384aa4b9a2484525ee258b61181cef353fb6019279d50c0db7c548351ef92321fb64effc5b51d39198e77b940a10e8b8af7380bd1bcead075bf8903ac9f700dc0290e0871ac6eb103313d413e21f525ce33778fc99e94e455dbe1bd9b3939be58b7ef8009cb7821beaa4902a762eaf866ca27aeacb78ceceeda9f3ef20ec0b36e359e81300bcaf44a8f47e26fa77551e6650dd2b79e91c2697f8acf16f8e805a606f3bb7e4d999308d2fc184edddc25f44be0837248&redirectUrl=https:%2F%2Fonlineinsuranceuat.canarahsbclife.com%2FiSelectSmart360%2Fpayment-redirection%2F');
      await page.getByRole('link', { name: 'DD' }).click();
      await page.locator('#ddInstrumentNumber').click();
      await page.locator('#ddInstrumentNumber').fill('122222');
      await page.getByRole('textbox', { name: 'MICR Code' }).click();
      await page.getByRole('textbox', { name: 'MICR Code' }).fill('122222222');
      await page.locator('#ddHub').selectOption('100');
      await page.getByRole('button', { name: 'Pay Now' }).click();
      await page.waitForNavigation({ timeout: 10000 });
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('radio').nth(1).check();
      const filePDFpath = '/home/vanshita/Downloads/SIM-physical-mandate-7423dcb091914c2f7ca0c0dd554da8e0.pdf'
      await page.getByLabel('Choose File').setInputFiles(filePDFpath);
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByPlaceholder('Enter your alternate mobile number').click();
      await page.getByPlaceholder('Enter your alternate mobile number').fill('8999999999');
      await page.locator('div:nth-child(12) > .sc-urpz7s-0 > #InputSelect > .css-yk16xz-control > .css-1hwfws3').click();
      await page.getByText('Unique Identification (UID)/Aadhaar card', { exact: true }).click();
      await page.locator('div:nth-child(13) > .sc-eo0ypy-0 > .form-control').click();
      await page.getByPlaceholder('Enter PAN').fill('FFFFF3333R');
      await page.getByPlaceholder('Father\'s First Name').click();
      await page.getByPlaceholder('Father\'s First Name').fill('JhV');
      await page.getByPlaceholder('Father\'s First Name').press('Tab');
      await page.getByPlaceholder('Father\'s Middle Name').fill('HV');
      await page.getByPlaceholder('Father\'s Middle Name').press('Tab');
      await page.getByPlaceholder('Father\'s Last Name').fill('JhV');
      await page.getByPlaceholder('Father\'s Last Name').press('Tab');
      await page.getByPlaceholder('Mother\'s First Name').fill('HJ');
      await page.getByPlaceholder('Mother\'s First Name').press('Tab');
      await page.getByPlaceholder('Mother\'s Middle Name').fill('HjV');
      await page.getByPlaceholder('Mother\'s Middle Name').press('Tab');
      await page.getByPlaceholder('Mother\'s Last Name').fill('HjvJ');
      await page.getByPlaceholder('Mother\'s Last Name').press('Tab');
      await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(1).click();
      await page.getByText('UNMARRIED', { exact: true }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByPlaceholder('Address Line 1').click();
      await page.getByPlaceholder('Address Line 1').fill('WD');
      await page.getByPlaceholder('Address Line 2').click();
      await page.getByPlaceholder('Address Line 2').fill('D');
      await page.getByPlaceholder('Address Line 3').click();
      await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
      await page.getByText('Gas bill(not older than two months)', { exact: true }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('div:nth-child(3) > .sc-urpz7s-0 > #InputSelect > .css-yk16xz-control > .css-1hwfws3').click();
      await page.getByText('OIL AND NATURAL GAS', { exact: true }).click();
      await page.locator('div:nth-child(4) > .sc-urpz7s-0 > #InputSelect > .css-yk16xz-control > .css-1hwfws3').click();
      await page.getByText('A&A DUKAAN INSURANCE WEB AGGREGATOR PVT LTD', { exact: true }).click();
      await page.getByPlaceholder('Address Line 1').click();
      await page.getByPlaceholder('Address Line 1').fill('HvjH');
      await page.getByPlaceholder('Address Line 1').press('Tab');
      await page.getByPlaceholder('Address Line 2').fill('VhJ');
      await page.getByPlaceholder('Address Line 2').press('Tab');
      await page.getByPlaceholder('Address Line 3').fill('VhJ');
      await page.getByPlaceholder('Address Line 3').press('Tab');
      await page.locator('#react-select-29-input').press('Tab');
      await page.getByPlaceholder('Enter pin code').fill('247001');
      await page.getByPlaceholder('Enter pin code').press('Tab');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('.sc-urpz7s-0 > #InputSelect > .css-yk16xz-control > .css-1hwfws3').click();
      await page.getByText('KARVY', { exact: true }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByPlaceholder('Height').click();
      await page.getByPlaceholder('Height').fill('155');
      await page.getByPlaceholder('Height').press('Tab');
      await page.getByPlaceholder('weight').fill('55');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: 'Proceed' }).click();;
      await page.getByRole('button', { name: 'Proceed' }).click();;
      await page.getByText('Select...').first().click();
      await page.getByText('Ms', { exact: true }).click();
      await page.getByPlaceholder('Enter here').click();
      await page.getByPlaceholder('Enter here').fill('WdD');
      await page.getByPlaceholder('DD/MM/YYYY').click();
      await page.getByRole('combobox').first().selectOption('2000');
      await page.getByLabel('Choose Monday, October 23rd, 2000').click();
      await page.getByPlaceholder('DD/MM/YYYY').click();
      await page.getByRole('combobox').first().selectOption('2020');
      await page.getByLabel('Choose Monday, October 19th, 2020').click();
      await page.locator('div:nth-child(4) > .sc-1vame3r-0 > #InputSelect > .css-yk16xz-control > .css-1hwfws3').click();
      await page.getByText('DAUGHTER-IN-LAW', { exact: true }).click();
      await page.getByPlaceholder('Enter contact number').click();
      await page.getByPlaceholder('Enter contact number').fill('8999999999');
      await page.getByPlaceholder('Enter email').click();
      await page.getByPlaceholder('Enter email').fill('D@gmail.coM');
      await page.getByPlaceholder('Address line 1').click();
      await page.getByPlaceholder('Address line 1').fill('ED');
      await page.getByPlaceholder('Address line 2').click();
      await page.getByPlaceholder('Type here').click();
      await page.getByPlaceholder('Type here').fill('247001');
      await page.getByPlaceholder('Type here').press('Tab');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('#gatsby-focus-wrapper > div').first().click();
      await expect(page.locator('.iselect-heading')).toHaveText('Appointee details section');
      //*[@id="gatsby-focus-wrapper"]/div/div[5]/div/div/div[1]/div/div[1]/div[1]/h1
      await page.getByPlaceholder('Enter Full Name').click();
      await page.getByPlaceholder('Enter Full Name').fill('WdeD');
      await page.locator('.react-datepicker__input-container').click();
      await page.getByLabel('Choose Sunday, September 25th, 2005').click();
      await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
      await page.getByText('GRAND PARENT', { exact: true }).click();
      await page.locator('div').filter({ hasText: /^Appointee Contact Number$/ }).nth(1).click();
      await page.getByPlaceholder('Enter contact number').click();
      await page.getByPlaceholder('Enter contact number').fill('8999999999');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('.css-1hwfws3').first().click();
      await page.getByText('Captain', { exact: true }).click();
      await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
      await page.getByText('off Shore', { exact: true }).click();
      await page.getByPlaceholder('Type Here').click();
      await page.getByPlaceholder('Type Here').fill('88');
      await page.waitForTimeout(4000);
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.waitForTimeout(4000);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      await page.locator('.but-center > div').first().click();
      await page.getByRole('textbox', { name: 'Enter place' }).click();
      await page.getByRole('textbox', { name: 'Enter place' }).fill('RfrF');
      await page.getByRole('button', { name: 'Generate OTP' }).click();
      await page.getByRole('textbox', { name: 'XXXXXX' }).click();
      await page.getByRole('textbox', { name: 'XXXXXX' }).fill('654321');
      await page.locator('div:nth-child(7)').click();
      await page.locator('.but-center > .previous-btn').first().click();
      await page.getByRole('button', { name: 'Submit Documents', exact: true }).click();
      const filePath = '/home/vanshita/Pictures/Screenshot from 2023-10-17 15-52-28.png'
      await page.locator('#file').setInputFiles(filePath);
      await page.waitForTimeout(2000);
      await page.locator('#file2').setInputFiles(filePath);
      await page.waitForTimeout(2000);
      await page.locator('#file3').setInputFiles(filePath);
      await page.waitForTimeout(2000);
      await page.locator('#file4').setInputFiles(filePath);
      await page.waitForTimeout(2000);
      await page.locator('#file5').setInputFiles(filePath);
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Submit Documents', exact: true }).click();
      await page.waitForTimeout(2000);
});