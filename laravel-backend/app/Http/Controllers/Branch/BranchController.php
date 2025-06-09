<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Models\Branch\Branch;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'bra_name' => 'required|string|max:100',
            'phone_number1' => 'required|string|max:20',
            'phone_number2' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:100',
            'open_time' => 'nullable|date_format:H:i',
            'close_time' => 'nullable|date_format:H:i',
            'address' => 'nullable|string|max:255',
            'frame_code' => 'nullable|string|max:20',
            'tax_code' => 'nullable|string|max:30',
            'active' => 'nullable|boolean',
        ]);

        $bra_code = generatePrimaryCode('branches', 'bra_code', 'BRA', 3); 

        $branch = Branch::create([
            'bra_code' => $bra_code,
            'bra_name' => $validated['bra_name'],
            'phone_number1' => $validated['phone_number1'],
            'phone_number2' => $validated['phone_number2'] ?? null,
            'email' => $validated['email'] ?? null,
            'open_time' => $validated['open_time'] ?? null,
            'close_time' => $validated['close_time'] ?? null,
            'address' => $validated['address'] ?? null,
            'frame_code' => $validated['frame_code'] ?? null,
            'tax_code' => $validated['tax_code'] ?? null,
            'active' => $validated['active'] ?? true,
        ]);

        return response()->json([
            'message' => 'Branch created successfully.',
            'data' => $branch
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Branch $branch)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Branch $branch)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Branch $branch)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Branch $branch)
    {
        //
    }
}
