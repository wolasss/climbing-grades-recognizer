module.exports = [{
	name: "yds",
	regex: /^5\.(\d{1}|1[0-5][abcd]?)$/gmi
}, {
	name: "french",
	regex: /^\d([abc]?\+?)?$/gmi
}, {
	name: "kurtyki",
	regex: /^(I{1,3}\+?|IV+?|V[\-\+]?|VI[\-\+]?|VI\.[1-8][\-\+]?)$/gmi
}, {
	name: "uiaa",
	regex: /^(I|II\+?|III|IV|V[\-\+]?|VI{1,3}[\-\+]?|IX[\-\+]?|X[\-\+]?|XI\-?)$/gmi
}, {
	name: "australian",
	regex: /^([1-2][1-9]|3[0-5]|20)$/gmi
}, {
	name: "british",
	regex: /^([1-3]|[4-7][abc]?|[MDS]|VD|[HV]S|HVS|E[1-9]|E10|E11|E12|E13)$/gmi
}, {
	name: "hueco",
	regex: /^V(B|0[\-\+]?|[1-9]|1[0-7])$/gmi
}, {
	name: "font",
	regex: /^(3|4[\-\+]?|5[\-\+]?|[6-9][ABC]\+?)$/gmi
}];