const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SIGNIN = 'Sign in';
const FEEDBACK = 'Feedback';

class LoginPage {
    static visit() {
        cy.visit(URL);
    
    }

    static fillUsername(username) {
        cy.get(USERNAME).type(username);

    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
    }
    static fillSignIn() {
        cy.contains(SIGNIN).click();
    }
    static fillFeedback() {
        cy.contains(FEEDBACK).click();
    }
}

export default LoginPage;