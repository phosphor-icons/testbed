import React from "react";
import { IconContext } from "phosphor-react";
import { useRecoilValue } from "recoil";

import { iconSizeAtom, iconWeightAtom, iconSetSelector } from "../../state";
import { isIcon } from "../../lib";
import { GridContainer } from "./Grid.styles";

const Grid: React.FC<{}> = () => {
  const size = useRecoilValue(iconSizeAtom);
  const weight = useRecoilValue(iconWeightAtom);
  const icons = useRecoilValue(iconSetSelector);

  return (
    <IconContext.Provider
      value={{ size, weight, color: "black", mirrored: false }}
    >
      <GridContainer $size={size}>
        {icons.map((Icon, index) =>
          isIcon(Icon) ? (
            <Icon key={`${Icon.displayName}-${index}`} />
          ) : (
            <img
              key={`${Icon.name}-${index}`}
              height={size}
              width={size}
              src={`data:image/svg+xml,${encodeURIComponent(Icon.svgString)}`}
              alt=""
            />
          )
        )}
      </GridContainer>
    </IconContext.Provider>
  );
};

export default Grid;
