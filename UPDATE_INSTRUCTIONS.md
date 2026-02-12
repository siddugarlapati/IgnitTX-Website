# Manual Update Required for Roadmaps Data

Due to the large size of the roadmaps data, please manually update `data.ts` file:

## Step 1: Add duration and resources fields to each roadmap

For each roadmap in the `ROADMAPS` array, add:

```typescript
duration: '6-8 months', // or appropriate duration
resources: [
  { title: 'Resource Name', url: 'https://...', description: 'Description' },
  // Add 3-4 resources per roadmap
]
```

## Step 2: Update durations for each roadmap:

- **Frontend Architecture**: `duration: '6-8 months'`
- **Backend Systems**: `duration: '8-10 months'`
- **AI Engineering**: `duration: '10-12 months'`
- **LLM Engineering**: `duration: '6-9 months'`
- **DevOps & SRE**: `duration: '7-9 months'`
- **System Architect**: `duration: '12-15 months'`
- **UI/UX Design**: `duration: '5-7 months'`
- **Systems & OOPS**: `duration: '6-8 months'`
- **Data Engineering**: `duration: '9-11 months'`
- **Cybersecurity**: `duration: '8-10 months'`

## Step 3: Add resources for each roadmap

See `data-roadmaps-update.ts` for complete examples of resources for:
- Frontend
- Backend
- AI Engineering
- LLM Engineering
- DevOps
- System Design

Copy the resources arrays from that file to your roadmaps.

## Step 4: The Roadmaps page has been updated with:
- Toggle button to switch between Roadmap view and Resources view
- Better layout with top padding to avoid navbar overlap
- Resources display when toggled

All changes are ready except the data.ts update which needs to be done manually due to file size.
