<?php

use Illuminate\Support\Facades\DB;

if (!function_exists('generatePrimaryCode')) {
    function generatePrimaryCode(string $table, string $column, string $department, int $padLength = 2): string
    {
        $datePart = now()->format('Ymd');
        $prefix = $department . '_' . $datePart . '_';

        $lastCode = DB::table($table)
            ->where($column, 'like', $prefix . '%')
            ->orderBy($column, 'desc')
            ->value($column);

        if ($lastCode) {
            $sequence = (int) substr($lastCode, strlen($prefix));
            $newSequence = $sequence + 1;
        } else {
            $newSequence = 1;
        }

        $sequencePart = str_pad($newSequence, $padLength, '0', STR_PAD_LEFT);

        return $prefix . $sequencePart;
    }
}
