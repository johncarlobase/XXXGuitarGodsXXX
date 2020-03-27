<div class="container">

        <div class="jumbotron">

            <h1 id="title"><span>Guitar Gods Database</span></h1>
            <div class="container clicks">
                <a href="/" class="btn btn-danger btn-lg">
                    <span class="fa fa-eye"></span> Search Guitar Players</a>
                <a href="/add" class="btn btn-danger btn-lg">
                    <span class="fa fa-plus"></span> Add Guitar Player</a>
                <a href="/all" class="btn btn-danger btn-lg">
                    <span class="fa fa-th-list"></span> All Guitar Players</a>
                <a href="/lastFm" class="btn btn-danger btn-lg">
                    <span class="fa fa-th-list"></span> LastFm</a>
                <a href="/update" class="btn btn-danger btn-lg">
                    <span class="fa fa-th-list"></span> Update</a>
            </div>
        </div>




        <div class="row">
            <!--Start roW-->

            <div class="col-3 md-success">
                <!--First column start-->
                <div class="card">
                    <div class="card-header">
                        Position Search
                    </div>
                    <div class="card-body">
                        <input type="text" id="rank-search" class="form-control">
                        <br>
                        <div class="text-right">
                            <button class="btn btn-primary btn-md" id="search-btn">
                                <span class="fa fa-search"></span> Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--First column start-->

            <div class="col-3 bg">
                <!--Second column End-->
                <div class="card mb-4">
                    <div class="card-header">
                        Guitar Player Search
                    </div>
                    <div class="card-body">
                        <input type="text" id="guitar-search" class="form-control">
                        <br>
                        <div class="text-right">
                            <button class="btn btn-primary btn-md" id="guitar-search-btn">
                                <span class="fa fa-search"></span> Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Second column End-->

            <!--Third column Start-->
            <div class="col-3 bg">
                <div class="card">
                    <div class="card-header">
                        Band Search
                    </div>
                    <div class="card-body">
                        <input type="text" id="band-search" class="form-control">
                        <br>
                        <div class="text-right">
                            <button class="btn btn-primary btn-md" id="band-search-btn">
                                <span class="fa fa-search"></span> Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Third column End-->

            <!--Third column Start-->
            <div class="col-3 bg">
                <div class="card">
                    <div class="card-header">
                        Genre Search
                    </div>
                    <div class="card-body">
                        <input type="text" id="genre-search" class="form-control">
                        <br>
                        <div class="text-right">
                            <button class="btn btn-primary btn-md" id="genre-search-btn">
                                <span class="fa fa-search"></span> Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Third column End-->

            <div class="row">
                <div class="results">
                    {{!-- <div class="card mb-4">
            <div class="card-header"> 
         <h3 class ="searchResult"></h3>
            </div>
            <div class="card-body"> --}}
                    <div class="well" id="stats"></div>

                    {{!-- <div>
                        <h3><span id="seachResult"></span></h3>   
                        <h6><span id="player"></span></h6>
                        <h6><span id="genre"></span></h6>
                        <h6><span id="band"></span></h6>
                    </div> --}}
                    {{!-- </div>
            </div> --}}
                </div>
            </div>


        </div>
        <!--Jumbortron End Div-->
    </div>
    <!--Containter End Div--></div>