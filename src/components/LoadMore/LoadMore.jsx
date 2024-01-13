import { Button, Segment } from 'semantic-ui-react';

export default function LoadMore({ setNextPage, loading }) {
  return (
    <Segment align="center">
      <Button
        loading={loading}
        onClick={() => setNextPage((currentPage) => currentPage + 1)}
      >
        Charger plus
      </Button>
    </Segment>
  );
}
