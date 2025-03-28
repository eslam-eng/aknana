<?php

namespace App\Http\Controllers;

use App\Models\Header;
use App\Models\Template;
use App\Models\ContactUs;
use App\Models\Footer;
use Illuminate\Http\Request;

class ContactsControllers extends Controller
{
    public function index()
    {
        $header = Header::first();
        $temp_contactUs = Template::where('name->en', 'Contact Us')->get();
        $footer = Footer::first();
        return view('contactUs.create', compact('header', 'temp_contactUs','footer'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|unique:contact_us,phone|regex:/^\+966[0-9]{9}$/',
            'email' => 'required|email|max:255',
            'text' => 'required|string',
        ]);

        ContactUs::create($request->all());
        return back()->with("success", "Your message has been sent successfully");
    }
}
