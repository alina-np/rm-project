import { ReactComponent as Folder } from "../../assets/icons/folder.svg";
import { ReactComponent as Gender } from "../../assets/icons/gender.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/angle-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/angle-right.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/angle-up.svg";
import { ReactComponent as Globe } from "../../assets/icons/globe.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export enum IconType {
  FOLDER = "folder",
  GENDER = "gender",
  PERSON = "person",
  ARROWLEFT = "arrowleft",
  ARROWRIGHT = "arrowright",
  ARROWUP = "arrowup",
  GLOBE = "globe",
  USER = "user",
}

export type IconProps = {
  type: IconType;
};

export function Icon({ type, ...otherProps }: IconProps) {
  const iconMap = {
    [IconType.FOLDER]: Folder,
    [IconType.GENDER]: Gender,
    [IconType.PERSON]: Person,
    [IconType.ARROWLEFT]: ArrowLeft,
    [IconType.ARROWRIGHT]: ArrowRight,
    [IconType.ARROWUP]: ArrowUp,
    [IconType.GLOBE]: Globe,
    [IconType.USER]: User,
  };

  const IconComponent = iconMap[type];

  return <IconComponent {...otherProps} className="w-5 h-5 fill-lime-300" />;
}
