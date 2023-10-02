import { CardType } from "../../types/components";
import * as S from "./style";

const CardResult = ({ title, phrase, flag }: CardType) => {
  return (
    <S.CardResultComponent>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardResultContainer>
        {!flag ? (
          <></>
        ) : (
          <S.FlagImage src={`https://flagsapi.com/${flag}/flat/64.png`} />
        )}
        <S.CardPhrase>
          {!phrase || phrase == undefined + "-" + undefined || undefined
            ? "OFFLINE"
            : phrase}
        </S.CardPhrase>
      </S.CardResultContainer>
    </S.CardResultComponent>
  );
};

export default CardResult;
