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
	// prevent default form submission
	evt.preventDefault();

	// define data object to submit along with request using form values
	data = {
		name  : $name.val(),
		year  : $year.val(),
		email : $email.val(),
		color : $color.val()
	};

	// ping the back-end API with the form data
	let resp = await axios.post('/api/get-lucky-num', data);

	// run the handleResponse function to manipulate dom
	handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
	let text = resp.data;
	$('b').html(''); //reset errors for each submit
	// reset results for each submit
	$results.text('');

	// deal with errors returned from api and display on page
	if (text.errors) {
		// declare variable for clarity purposes
		const errors = text.errors;
		for (let err_list in errors) {
			for (let err of errors[err_list]) {
				$(`#${err_list}-err`).append(err);
			}
		}
		// add the form data to the dom if no errors exist
	} else {
		// separate num fact API response from year fact API response
		let numData = text.num;
		let yearData = text.year;

		let numFact = `Your lucky number is ${numData.num} (${numData.fact})`;
		let yearFact = `Your birth year, ${yearData.year}, fact is: ${yearData.fact}`;

		// append facts to DOM in plain text form (with a break in between to make it look neater)
		$results.append(numFact).append('<br>').append(yearFact);
	}
}

// handle the form submission
$('#lucky-form').on('submit', processForm);
