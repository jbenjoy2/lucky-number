// define global vars
const $form = $('#lucky-form');
const $name = $('#name');
const $nameErr = $('#name-err');
const $year = $('#year');
const $yearErr = $('#year-err');
const $email = $('#email');
const $emailErr = $('#email-err');
const $color = $('#color');
const $results = $('#lucky-results');

/** processForm: get data from form and make AJAX call to our API. */
async function processForm(evt) {
	evt.preventDefault();
	data = {
		name  : $name.val(),
		year  : $year.val(),
		email : $email.val(),
		color : $color.val()
	};

	let resp = await axios.post('/api/get-lucky-num', data);
	console.log(resp);
	handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
	let text = resp.data;
	$('b').html(''); //reset errors for each submit
	$results.text('');
	if (text.errors) {
		const errors = text.errors;
		for (let err_list in errors) {
			for (let err of errors[err_list]) {
				$(`#${err_list}-err`).append(err);
			}
		}
	} else {
		let numData = text.num;
		let yearData = text.year;

		let numFact = `Your lucky number is ${numData.num} (${numData.fact})`;
		let yearFact = `Your birth year, ${yearData.year}, fact is: ${yearData.fact}`;

		$results.append(numFact).append('<br>').append(yearFact);
	}
}

$('#lucky-form').on('submit', processForm);
