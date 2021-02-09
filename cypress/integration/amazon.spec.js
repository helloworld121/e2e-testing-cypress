
// cypress uses 'context' instead of 'describe'
context('Visit Amazon', () => {

    beforeEach(() => {
        // in the beginning we need to visit amazon
        cy.visit('https://amazon.de');
    });

    it('ich möchte etwas suchen', () => {
        // to get the selector
        // 1) open page in Chrome DEV-Tool
        // 2) use 'select element'
        // 3) in Elements view "right click" the element and choose "Copy > copy selector"
        cy.get('#twotabsearchtextbox').type('warnweste für hühner');
        cy.get('#nav-search-submit-button').click();

        cy.get('#search > div.s-desktop-width-max.s-desktop-content.sg-row > div.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > span > div > div > div > div > div:nth-child(4) > h2 > a > span')
            .should('have.text', '"EAZY CASE Reflektorweste, Sicherheitsweste, flexibel einstellbar I Warnweste mit Reflektoren, atmungsaktiv I Reflektierende Weste, ideal zur Erhöhung der Sichtbarkeit im Straßenverkehr I Größe XS - L"');

        //cy.get('.a-color-state')

    });

});
