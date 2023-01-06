import { CardType } from "../../types/components";
import * as S from "./style";

const CardResult  = ({ title, phrase }: CardType) => {
  return (
    <S.CardResultComponent>
      <S.CardResultContainer>
        <S.ResultCardTitle>
          { title }
        </S.ResultCardTitle>
      </S.CardResultContainer>
      <S.ResultCardPhrase>
        { phrase }
      </S.ResultCardPhrase>
    </S.CardResultComponent>
  );
}

export default CardResult;
