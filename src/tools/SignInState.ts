export class SignInState {
    static signedIn = false;

    static setSignedIn(signed: boolean) {
        SignInState.signedIn = signed;
    }

    static isSignedIn(): boolean {
        return SignInState.signedIn;
    }

}