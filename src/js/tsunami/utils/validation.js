// export function validateEmail(emailAddress) {
// 	var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
// 	var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
// 	var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
// 	var sQuotedPair = '\\x5c[\\x00-\\x7f]';
// 	var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
// 	var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
// 	var sDomain_ref = sAtom;
// 	var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
// 	var sWord = '(' + sAtom + '|' + sQuotedString + ')';
// 	var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
// 	var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
// 	var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
// 	var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
//
// 	var reValidEmail = new RegExp(sValidEmail);
//
// 	if (reValidEmail.test(emailAddress)) {
// 		return true;
// 	}
//
// 	return false;
// }

// export function validateEmail(email) {
// 	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(String(email).toLowerCase());
// }

export function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export function hasValue(val) {
	return (val != null && val != undefined && val != "");
}
