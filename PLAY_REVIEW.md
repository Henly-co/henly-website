# Google Play Resubmission Checklist

This app’s privacy and account deletion pages are now stable and indexable. Use this checklist to resubmit.

## URLs to Provide
- Privacy Policy: https://henly.co/privacy
- Account Deletion: https://henly.co/account-deletion

Both URLs return HTTP 200 and are accessible without requiring in-app navigation.

## What Changed
- Migrated hosting from GitHub Pages to Namecheap with .htaccess SPA routing.
- Unified compliance pages under SPA (no separate static HTML).
- Updated Privacy Policy: OTP-only login, no passwords; controller clarified; contact set to info@henly.co.
- Account Deletion: Live form posts to server endpoint and emails info@henly.co; confirmation copy updated.

## How We Verify (optional)
- Root: curl -I https://henly.co/
- Privacy: curl -I https://henly.co/privacy
- Account Deletion: curl -I https://henly.co/account-deletion

Look for final status 200 OK (after any 301/302 to add a trailing slash).

## If Play Requests Evidence
- Provide screenshots of privacy and account-deletion pages loading in browser.
- Include headers showing HTTP/2 200, content-type: text/html; charset=utf-8.

## Support Contact
- Email: info@henly.co (central support contact)
