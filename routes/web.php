<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return view('portfolio');
});

Route::post('/contatto', [ContactController::class, 'store'])->name('contatto.store');