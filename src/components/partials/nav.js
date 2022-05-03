

function Nav(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <div class="row">
                <a class="navbar-brand col-2" href="/">Logo</a>
                    <div class="input-group mb-3 col">
                        <div>
                            <input type="text" class="form-control bg-dark bg-outline-light" placeholder="Search..."></input>
                        </div>
                    </div>
                </div>
               
                <button class="btn btn-outline-light" style={{"hover":"none"}}>Sign In</button>

            </div>
        </nav>
        
    );
}

export default Nav;