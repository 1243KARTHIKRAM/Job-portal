param(
    [string]$StartDate = "2024-01-01",
    [string]$EndDate = "2024-12-31",
    [int]$TargetTotalCommits = 119,
    [string]$FileName = "commit-log.txt",
    [string]$CommitBase = "work update"
)

# --- sanity checks ---
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "git is not installed or not in PATH. Install Git for Windows and try again."
    exit 1
}

# Ensure repo initialized
if (-not (Test-Path ".git")) {
    git init
    git checkout -b main
    Write-Host "Initialized new git repo on branch 'main'."
} else {
    Write-Host "Existing git repository detected."
}

# Ensure commit-log file exists
if (-not (Test-Path $FileName)) { New-Item -Path $FileName -ItemType File | Out-Null }

# Convert to DateTime
$start = [datetime]::ParseExact($StartDate, "yyyy-MM-dd", $null)
$end = [datetime]::ParseExact($EndDate, "yyyy-MM-dd", $null)
if ($end -lt $start) { Write-Error "EndDate must be after StartDate"; exit 1 }

# Build list of daily dates
$dates = @()
for ($d = $start; $d -le $end; $d = $d.AddDays(1)) {
    $dates += $d
}

$dailyCount = $dates.Count
Write-Host "Total days available: $dailyCount"

# Limit days to TargetTotalCommits if too many
if ($dailyCount -gt $TargetTotalCommits) {
    $dates = $dates[0..($TargetTotalCommits - 1)]
    $dailyCount = $dates.Count
    $extrasNeeded = 0
} else {
    $extrasNeeded = $TargetTotalCommits - $dailyCount
}

Write-Host "Daily commits: $dailyCount"
Write-Host "Extra commits needed: $extrasNeeded"

# Function to commit at date/time
function Make-CommitAt($dt, $msg) {
    $datestr = $dt.ToString("yyyy-MM-ddTHH:mm:ss")
    Add-Content -Path $FileName -Value ("// " + $datestr + " - " + $msg)

    $env:GIT_AUTHOR_DATE = $datestr
    $env:GIT_COMMITTER_DATE = $datestr

    git add $FileName
    git commit -m "$msg $datestr" 2>$null

    Remove-Item Env:GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
    Remove-Item Env:GIT_COMMITTER_DATE -ErrorAction SilentlyContinue
}

# Create daily commits
foreach ($dt in $dates) {
    $commitTime = [datetime]::ParseExact($dt.ToString("yyyy-MM-dd") + "T12:00:00", "yyyy-MM-ddTHH:mm:ss", $null)
    Make-CommitAt $commitTime "$CommitBase (daily)"
}

# If still need extras
if ($extrasNeeded -gt 0) {
    for ($i = 0; $i -lt $extrasNeeded; $i++) {
        $extraDt = ($end.AddMinutes($i + 10))
        Make-CommitAt $extraDt "$CommitBase (extra)"
    }
}

Write-Host "Created $TargetTotalCommits commits."
Write-Host "Now push using: git push -u origin main"
