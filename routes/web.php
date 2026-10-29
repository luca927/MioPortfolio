<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return view('portfolio');
});

Route::post('/contatto', [ContactController::class, 'store'])->name('contatto.store');
// Massimo 5 messaggi ogni minuto per lo stesso indirizzo IP
Route::post('/contatto', [ContactController::class, 'store'])->middleware('throttle:5,1');