import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.pause();

    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').press('CapsLock');
    await page.getByPlaceholder('First Name').fill('Alberto');
    //await page.getByPlaceholder('First Name').press('Tab');
    await page.getByPlaceholder('Middle Name').click();
    await page.getByPlaceholder('Middle Name').fill('Lopez');
    await page.getByPlaceholder('Last Name').click();
    //await page.getByPlaceholder('Middle Name').press('Tab');
    await page.getByPlaceholder('Last Name').fill('Paz');
    await page.locator('form span').click();
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('albertodelAzASOLIL4453al7');
    await page.locator('input[type="password"]').first().click();
    await page.locator('input[type="password"]').first().fill('admin1234');
    await page.locator('input[type="password"]').nth(1).click();
    await page.locator('input[type="password"]').nth(1).fill('admin1234');
    await page.getByRole('button', { name: 'Save' }).click();

    await page.pause();
  //Personal details
    await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1).fill('123456789');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first().fill('9876');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByPlaceholder('yyyy-dd-mm').click();
  await page.getByText('2024', { exact: true }).click();
  await page.getByText('2022').click();
  await page.locator('div').filter({ hasText: /^September$/ }).click();
  await page.getByRole('menu').getByText('September').click();
  await page.getByText('12').click();
  await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(1).click();
  await page.getByRole('option', { name: 'Afghan' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.locator('div').filter({ hasText: /^Date of BirthGenderMaleFemale$/ }).getByPlaceholder('yyyy-dd-mm').click();
  await page.locator('li').filter({ hasText: '2024' }).locator('i').click();
  await page.getByText('2021', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^September$/ }).click();
  await page.getByText('November').click();
  await page.getByText('8', { exact: true }).click();
  //await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Blood Type$/ }).click();
  await page.getByText('Blood Type-- Select --').click();
  await page.getByRole('option', { name: 'B+', exact: true }).click();
  await page.locator('form').filter({ hasText: 'Blood TypeB+Test_Field Save' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Blood TypeB+Test_Field Save' }).getByRole('textbox').fill('sui');
  await page.locator('form').filter({ hasText: 'Blood TypeB+Test_Field Save' }).getByRole('button').click();
  await page.getByText('Attachments Add').click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('H');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Here');
  await page.getByRole('button', { name: 'Save' }).nth(2).click();
  await page.pause();
  //Contact Details
  await page.getByRole('link', { name: 'Contact Details' }).click();
  await page.getByText('Contact DetailsAddressStreet').click();
  await page.locator('div').filter({ hasText: /^Street 1$/ }).nth(1).click();
  await page.locator('div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input').first().fill('A');
  await page.locator('div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input').first().fill('Av ');
  await page.locator('div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input').first().fill('Av P');
  await page.locator('div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input').first().fill('Av Pardo');
  await page.locator('div').filter({ hasText: /^Street 2$/ }).nth(1).click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('A');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('Av ');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('Av P');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('Av Procer');
  await page.locator('div').filter({ hasText: /^City$/ }).nth(1).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('M');
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().press('CapsLock');
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('Munbay');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).nth(2).click();
  await page.locator('body').press('CapsLock');
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('C');
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input').press('CapsLock');
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('Clima');
  await page.locator('div').filter({ hasText: /^Zip\/Postal Code$/ }).nth(1).click();
  await page.locator('div:nth-child(5) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('123455');
  await page.getByText('Country-- Select --').click();
  await page.getByRole('option', { name: 'Algeria' }).click();
  await page.getByRole('heading', { name: 'Telephone' }).click();
  await page.locator('div:nth-child(6) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
  await page.locator('div:nth-child(6) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('987654321');
  await page.locator('div').filter({ hasText: /^Mobile$/ }).nth(1).click();
  await page.locator('div:nth-child(6) > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('159487');
  await page.locator('div').filter({ hasText: /^Work$/ }).nth(1).click();
  await page.locator('div:nth-child(6) > .oxd-grid-3 > div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('+41');
  await page.locator('div:nth-child(9) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
  await page.locator('div').filter({ hasText: /^Work Email$/ }).nth(1).click();
  await page.locator('div:nth-child(9) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('albertoMAG@gmail.com');
  await page.locator('div').filter({ hasText: /^Other Email$/ }).nth(1).click();
  await page.locator('div:nth-child(9) > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('loMAG@gmail.com');
  await page.getByText('* Required Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Attachments Add').click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('T');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Tipeo');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.pause();


  //Emergency Contacts 
  await page.getByRole('link', { name: 'Emergency Contacts' }).click();
  await page.getByText('Assigned Emergency Contacts Add').click();
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('L');
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('Luis ');
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('Luis F');
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('Luis Federico');
  await page.locator('div').filter({ hasText: /^Relationship$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').nth(1).press('CapsLock');
  await page.locator('form').getByRole('textbox').nth(1).fill('S');
  await page.locator('form').getByRole('textbox').nth(1).press('CapsLock');
  await page.locator('form').getByRole('textbox').nth(1).fill('Single');
  await page.locator('div').filter({ hasText: /^Home Telephone$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').nth(2).fill('987');
  await page.locator('div').filter({ hasText: /^Mobile$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').nth(3).fill('7531');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.pause();

  //Dependents

  await page.getByRole('link', { name: 'Emergency Contacts' }).click();
  await page.getByText('Assigned Emergency Contacts Add').click();
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('L');
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('Luis ');
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('Luis F');
  await page.locator('form').getByRole('textbox').first().press('CapsLock');
  await page.locator('form').getByRole('textbox').first().fill('Luis Federico');
  await page.locator('div').filter({ hasText: /^Relationship$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').nth(1).press('CapsLock');
  await page.locator('form').getByRole('textbox').nth(1).fill('S');
  await page.locator('form').getByRole('textbox').nth(1).press('CapsLock');
  await page.locator('form').getByRole('textbox').nth(1).fill('Single');
  await page.locator('div').filter({ hasText: /^Home Telephone$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').nth(2).fill('987');
  await page.locator('div').filter({ hasText: /^Mobile$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').nth(3).fill('7531');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Attachments Add').click();
  await page.getByRole('button', { name: ' Add' }).nth(1).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('E');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Emergency ');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Emergency ');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Emergency d');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Emergency dETAIL');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Contact Details' }).click();
  await page.getByRole('link', { name: 'Dependents' }).click();
  await page.getByText('Assigned Dependents Add No').click();
  await page.getByRole('button', { name: ' Add' }).first().click();
  await page.getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
  await page.getByRole('textbox').nth(1).press('CapsLock');
  await page.getByRole('textbox').nth(1).fill('S');
  await page.getByRole('textbox').nth(1).press('CapsLock');
  await page.getByRole('textbox').nth(1).fill('Sonny');
  await page.getByText('Relationship-- Select --').click();
  await page.getByRole('option', { name: 'Other' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('S');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('Son');
  await page.locator('form div').filter({ hasText: 'Date of Birth' }).nth(3).click();
  await page.getByText('17').click();
  await page.getByRole('button', { name: 'Save' }).click();
  /*await page.getByText('Attachments Add').click();
  await page.getByRole('button', { name: ' Add' }).nth(1).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('D');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Dependents');
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).click();*/
  await page.pause();



  // Job

  await page.getByRole('link', { name: 'Job' }).click();
  await page.getByText('Job DetailsJoined DateJob').click();
  await page.getByPlaceholder('yyyy-dd-mm').click();
  await page.locator('li').filter({ hasText: '2024' }).click();
  await page.getByText('2022').click();
  await page.locator('li').filter({ hasText: 'September' }).click();
  await page.getByText('August').click();
  await page.getByText('10').click();
  await page.getByText('Job Title-- Select --').click();
  await page.getByText('Chief Executive Officer').click();
  await page.getByText('Job SpecificationNot Defined').click();
  await page.getByText('Not Defined').click();
  await page.getByText('Job Category-- Select --').click();
  await page.getByRole('option', { name: 'Laborers and Helpers' }).click();
  await page.getByText('Sub Unit-- Select --').click();
  await page.getByRole('option', { name: 'Engineering' }).click();
  await page.getByText('Location-- Select --').click();
  await page.getByRole('option', { name: 'HQ - CA, USA' }).click();
  await page.getByText('Employment Status-- Select --').click();
  await page.getByText('Full-Time Contract').click();
  await page.locator('form span').click();
  await page.locator('form span').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Attachments Add').click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('J');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Job details');
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.pause();

  // Salary

  await page.getByRole('link', { name: 'Salary' }).click();
  await page.getByText('Assigned Salary Components Add').click();
  await page.getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^Salary Component$/ }).nth(1).click();
  await page.getByRole('textbox').nth(1).fill('1580');
  await page.getByText('Pay Grade-- Select --').click();
  await page.getByRole('option', { name: 'Grade 4' }).click();
  await page.getByText('Pay Frequency-- Select --').click();
  await page.getByRole('option', { name: 'Hourly' }).click();
  await page.getByText('Currency-- Select --').click();
  await page.getByText('United States Dollar').click();
  await page.locator('div').filter({ hasText: /^Amount Min: 20000 - Max: 30000$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Amount$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Amount Min: 20000 - Max: 30000$/ }).getByRole('textbox').fill('25000');
  await page.locator('div').filter({ hasText: /^Comments$/ }).nth(3).click();
  await page.locator('textarea').press('CapsLock');
  await page.locator('textarea').fill('C');
  await page.locator('textarea').press('CapsLock');
  await page.locator('textarea').fill('Check');
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.orangehrm-attachment > div').first().click();
  await page.getByRole('button', { name: ' Add' }).nth(1).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.locator('div').filter({ hasText: /^Comment$/ }).nth(3).click();
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('C');
  await page.getByPlaceholder('Type comment here').press('CapsLock');
  await page.getByPlaceholder('Type comment here').fill('Check');
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.pause();

  // Report to


  await page.getByRole('link', { name: 'Report-to' }).click();
  await page.getByText('Report toAssigned Supervisors').click();
  await page.getByText('Assigned Supervisors Add').click();
  await page.locator('div').filter({ hasText: /^Assigned Supervisors Add No Records FoundNameReporting MethodActions$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
  await page.getByPlaceholder('Type for hints...').fill('dasdsaf');
  await page.getByText('Reporting Method-- Select --').click();
  await page.getByRole('option', { name: 'Direct', exact: true }).click();
  await page.getByText('NameInvalid').click();
  await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').fill('');
  await page.getByPlaceholder('Type for hints...').press('CapsLock');
  await page.getByPlaceholder('Type for hints...').fill('A');
  await page.getByPlaceholder('Type for hints...').press('CapsLock');
  await page.getByPlaceholder('Type for hints...').fill('A');
  await page.getByText('Ranga Akunuri').click();
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Assigned Subordinates Add').click();
  await page.locator('div').filter({ hasText: /^Assigned Subordinates Add No Records FoundNameReporting MethodActions$/ }).getByRole('button').click();
  await page.getByText('-- Select --').click();
  await page.getByText('Reporting Method-- Select').click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Direct', exact: true }).click();
  await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').fill('a');
  await page.getByPlaceholder('Type for hints...').press('CapsLock');
  await page.getByRole('option', { name: 'Timothy Lewis Amiano' }).click();
  await page.getByText('* Required Cancel Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Attachments Add').click();
  await page.getByRole('button', { name: ' Add' }).nth(2).click();
  await page.getByText('Browse').click();
  await page.locator('input[type="file"]').setInputFiles('Desafío de Automatización QA - NTT Data.pdf');
  await page.getByPlaceholder('Type comment here').click();
  await page.locator('div').filter({ hasText: /^Comment$/ }).nth(3).click();
  await page.getByPlaceholder('Type comment here').fill('FDFSFDS');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.pause();


 

    //await page.getByRole('button', { name: 'Login' }).click();

  // ---------------------

    //await page.locator('text=Login').click()

    /*await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Luis')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.locator('text=Sign in').click()*/
    
})