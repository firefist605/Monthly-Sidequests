# Workflow Preferences for Monthly Sidequests

## Development Workflow
- **Branching Strategy**: Use Git Flow for managing branches. Feature branches should be created from the `develop` branch and merged back into `develop` upon completion.
- **Code Reviews**: All code must be reviewed by at least one other team member before merging into the `develop` branch. Use pull requests for this purpose.
- **Deployment**: Deployments to production should only occur from the `main` branch. Use CI/CD pipelines to automate the deployment process.

## Issue Tracking
- Use GitHub Issues to track bugs and feature requests. Each issue should have a clear description and acceptance criteria.

## Testing
- Write unit tests for all new features and ensure that existing tests pass before merging code. Use a testing framework like Jest.

## Documentation
- Update documentation in the README.md file whenever new features are added or existing features are modified. 

## Communication
- Regular stand-up meetings should be held twice a week to discuss progress and blockers. Use Slack for day-to-day communication and updates.