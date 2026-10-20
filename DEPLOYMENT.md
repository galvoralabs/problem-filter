# Publish Problem Filter

The package is ready to publish as one public repository. It contains the reusable skill, compatibility adapters, behavioural proof, examples, and the marketing page in `site/`.

## 1. Create the public repository

Create an empty public GitHub repository named `problem-filter` under the account or organisation that should own the project. Do not add a README, license, or `.gitignore` during creation because those files already exist here.

## 2. Push this folder

From this folder:

```powershell
git branch -M main
git remote add origin https://github.com/OWNER/problem-filter.git
git add .
git commit -m "docs: add compatibility package and product landing page"
git push -u origin main
```

Replace `OWNER` with the GitHub account or organisation name. If a remote already exists, use `git remote -v` first and update it only if it points to the wrong repository.

## 3. Publish the landing page

The page is deliberately dependency-free. For a quick local check, open `site/index.html` in a browser. For a public page, deploy the contents of `site/` with any static host or configure the repository's Pages workflow to publish that directory.

The page is a demonstration surface, not the skill runtime. The skill itself remains `SKILL.md` at the repository root.

## 4. What users should see first

The repository entry point should be:

1. `README.md` for the plain-language explanation.
2. `site/index.html` for the visual product walkthrough.
3. `COMPATIBILITY.md` for agent-specific installation paths.
4. `TEST-REPORT.md` for the evidence behind the behaviour claims.

## 5. Release checklist

- Confirm the repository is public.
- Replace the landing page's temporary GitHub link with the final repository URL.
- Open the landing page at desktop and mobile widths.
- Run the six test cases in `TEST-REPORT.md` again after any skill change.
- Tag the first public version after the README, skill, adapters, and proof report are pushed together.
