<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome'      => 'required|string|max:100',
            'email'     => 'required|email|max:150',
            'messaggio' => 'required|string|max:2000',
        ]);

        // Invia email — configura MAIL_* in .env
        Mail::send([], [], function ($mail) use ($validated) {
            $mail->to('luca@example.com')          // ← la tua email
                 ->from($validated['email'], $validated['nome'])
                 ->subject('Nuovo messaggio dal portfolio')
                 ->text(
                     "Nome: {$validated['nome']}\n" .
                     "Email: {$validated['email']}\n\n" .
                     $validated['messaggio']
                 );
        });

        return back()->with('success', 'Messaggio inviato! Ti rispondo al più presto.');
    }
}