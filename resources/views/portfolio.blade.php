<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luca Casalone - Junior Web Developer</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">

    <meta name="csrf-token" content="{{ csrf_token() }}">
  {{-- Vite compila e inietta automaticamente app.css e app.js --}}
  
</head>
<body>
<div id="portfolio"></div> @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])



</body>
</html>