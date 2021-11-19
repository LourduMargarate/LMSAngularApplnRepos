export interface IssueBook{
    "issueNo":number,
    "status":string,
    "issueDate":Date,
    "returnWithinDate":Date,
    "actualReturnedDate":Date,

    
    "book_Id":book,
    "userid":libuser

}

 export interface book{
    "book_Id":number
}

export interface libuser{
    "userid":number
}