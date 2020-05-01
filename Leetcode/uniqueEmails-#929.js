const numUniqueEmails = (emails) => {
    //keep track of unique emails
    const obj = {}
    //loop through the emails
    for(let i = 0; i < emails.length; i++){
    //for each email I want to filter through each and ignore . and ignore everything after + and           before @
        const email = emails[i]
        let bool = true
        let string = ""
        let after = false
        for(let j = 0; j < email.length; j++){
            if(email[j] === "." && after === false) continue
            else if(email[j] === "+") bool = false
            else if(email[j] === "@") {
                bool = true
                string+="@"
                after = true
            } else if(bool){
                string+=email[j]
            }
        }
        if(!obj[string]) obj[string] = true
    }
    return Object.keys(obj).length
    //get a count of the emails and return it
    //return number count of emails sent
};

// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]) // ==> 2
// "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails ==> returns 2
