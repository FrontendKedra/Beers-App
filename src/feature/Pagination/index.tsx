import { UsePageNumber } from "../../interfaces/generalInterfaces";
import { usePageNumber } from "../../common/customHooks/usePageNumber";
import {
  ArrowNext,
  ArrowPrevious,
  Button,
  PageChanger,
  PageCounter,
} from "./styled";

export const Pagination = () => {
  const [pageNumber, changePage]: UsePageNumber = usePageNumber();
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === 28;

  return (
    <PageChanger>
      <Button disabled={isFirstPage} onClick={() => changePage(pageNumber - 1)}>
        <ArrowPrevious />
      </Button>
      <PageCounter>{pageNumber}</PageCounter>
      <Button disabled={isLastPage} onClick={() => changePage(pageNumber + 1)}>
        <ArrowNext />
      </Button>
    </PageChanger>
  );
};
