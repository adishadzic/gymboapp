<template>
    <div class="app">
        <h2>Edit Profile</h2>

        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                </div>
            </div>
        </form>
    </div>
</template>