/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_boomsigninsignup",
        editProfile: "B2C_1_boomedituser"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://anandacocorotest.b2clogin.com/anandacocorotest.onmicrosoft.com/B2C_1_boomsigninsignup",
        },
        editProfile: {
            authority: "https://anandacocorotest.b2clogin.com/anandacocorotest.onmicrosoft.com/B2C_1_boomedituser"
        }
    },
    authorityDomain: "anandacocorotest.b2clogin.com"
}