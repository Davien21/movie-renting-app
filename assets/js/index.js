let movie_store = new MovieStore;
let movies = movie_store.getMovieArray();

let search_btn = document.querySelector('#seach-btn')
let return_btn = document.querySelector('#return-btn')
let search_input = document.querySelector('input#movie-input')
let movie_ = document.querySelector('table#movie-table');
let movie_table = movie_.querySelector('tbody');

let movie_row = (movie_obj,index) => {
	let html = 
	`
		<tr>
			<td class="name">${movie_obj.name}</td>
			<td>${movie_obj.genre}</td>
			<td class="director">${movie_obj.director}</td>
			<td>
				<button class="btn btn-success btn-block paper-box-shadow" onclick ="rent(this)">Rent</button>
			</td>

		</tr>
	`;
	return html;
}

function makeMovieTable (list_array) {
	let movie_list = ''
	list_array.forEach((movie_obj,index) => {
		movie_list+=movie_row(movie_obj,index)
	});
	movie_table.innerHTML = movie_list;
}
//The function below runs on page load and creates the movie table
makeMovieTable(movies);

function rent (btn) {
	let movie_row = btn.closest('tr');
	let movie_name = movie_row.querySelector('.name')
	let movie_director = movie_row.querySelector('.director')
	alert(`You have successfully rented the Movie: \n${movie_name.innerText}\n By \n${movie_director.innerText}`);
	rentMovie(movie_row);
}

search_input.oninput = (e) => {
	let string = e.target.value;
	let movie_list = movie_store.searchMoviesByString(string);
	makeMovieTable(movie_list)
}

return_btn.onclick = () => {
	let all_rows = document.querySelectorAll('tr');
	all_rows.forEach( function(element) {
		element.classList.remove('d-none')
	});
}

function rentMovie (table_row) {
	table_row.classList.add('d-none');
}


