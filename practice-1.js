describe('kumpulan test case', function(){
    it('tc-1', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Ahmad')
        cy.get('#lastName').type('Saiful')
        cy.get('#userEmail').type('ahmadsaiful@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('0812345678')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
        cy.get('#currentAddress').type('Kp. Suka Jadi')
        cy.get('#submit').click()
        
    })
})