Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::new("C:\Users\aryan\Desktop\BHOOMI\bhoomi-website\public\images\logo.png")
Write-Host "Size: $($img.Width)x$($img.Height)"

for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        $p = $img.GetPixel($x, $y)
        if ($p.R -gt 230 -and $p.G -gt 230 -and $p.B -gt 230) {
            $img.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        }
    }
}

$img.Save("C:\Users\aryan\Desktop\BHOOMI\bhoomi-website\public\images\logo-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
Write-Host "Done - saved logo-transparent.png"
