import "./styles/buttons.css";

import type {
  CSSProperties,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";

// 1. Luxe by Uye color presets
const PRESETS = {
  gold: {
    bg: "#C9A24F",
    fg: "#2B3414",
    border: "#C9A24F",
    hoverBg: "#4A5D23",
    hoverFg: "#F5F0E6",
    hoverBorder: "#C9A24F",
  },
  forest: {
    bg: "#4A5D23",
    fg: "#F5F0E6",
    border: "#C9A24F",
    hoverBg: "#C9A24F",
    hoverFg: "#2B3414",
    hoverBorder: "#C9A24F",
  },
  green: {
    bg: "#4A5D23",
    fg: "#F5F0E6",
    border: "#C9A24F",
    hoverBg: "#C9A24F",
    hoverFg: "#2B3414",
    hoverBorder: "#C9A24F",
  },
  olive: {
    bg: "#808000",
    fg: "#F5F0E6",
    border: "#C9A24F",
    hoverBg: "#4A5D23",
    hoverFg: "#F5F0E6",
    hoverBorder: "#C9A24F",
  },
  ivory: {
    bg: "#F5F0E6",
    fg: "#4A5D23",
    border: "#4A5D23",
    hoverBg: "#4A5D23",
    hoverFg: "#F5F0E6",
    hoverBorder: "#4A5D23",
  },
  sage: {
    bg: "#E6E8D8",
    fg: "#4A5D23",
    border: "#4A5D23",
    hoverBg: "#4A5D23",
    hoverFg: "#F5F0E6",
    hoverBorder: "#4A5D23",
  },
  beige: {
    bg: "#E8E1D2",
    fg: "#4A5D23",
    border: "#4A5D23",
    hoverBg: "#4A5D23",
    hoverFg: "#F5F0E6",
    hoverBorder: "#4A5D23",
  },
} as const;

type PresetName = keyof typeof PRESETS;
type ButtonColor = PresetName | (string & {});
type ButtonVariant = "solid" | "outline";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

// 2. CSS custom properties
interface ButtonStyle extends CSSProperties {
  "--btn-bg": string;
  "--btn-fg": string;
  "--btn-border": string;
  "--btn-hover-bg": string;
  "--btn-hover-fg": string;
  "--btn-hover-border": string;
}

interface SharedProps {
  text?: ReactNode;
  children?: ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  fullWidth?: boolean;
  textColor?: string;
  className?: string;
}

// 3. Separate button and link props
type ButtonProps = SharedProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof SharedProps | "style" | "onClick"
  > & {
    href?: never;
    target?: never;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  };

type LinkProps = SharedProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof SharedProps | "style" | "onClick" | "href" | "target"
  > & {
    href: string;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  };

export type ReusableButtonProps = ButtonProps | LinkProps;

// 4. Choose readable text for custom hex colors
function readableText(hex: string): string {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex);

  if (!match) return "#ffffff";

  let h = match[1];

  if (h.length === 3) {
    h = h
      .split("")
      .map((character) => character + character)
      .join("");
  }

  const [r, g, b] = [0, 2, 4].map((index) =>
    parseInt(h.slice(index, index + 2), 16),
  );

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 150 ? "#1b1815" : "#ffffff";
}

// 5. Resolve preset colors or custom hex colors
function resolveColors(color: ButtonColor, textColor?: string) {
  if (Object.prototype.hasOwnProperty.call(PRESETS, color)) {
    const preset = PRESETS[color as PresetName];

    return {
      ...preset,
      fg: textColor || preset.fg,
    };
  }

  const fg = textColor || readableText(color);

  return {
    bg: color,
    fg,
    border: color,
    hoverBg: `color-mix(in srgb, ${color} 82%, black)`,
    hoverFg: fg,
    hoverBorder: `color-mix(in srgb, ${color} 82%, black)`,
  };
}

// 6. Reusable button component
export default function Button(props: ReusableButtonProps) {
  const {
    text,
    children,
    color = "green",
    variant = "solid",
    size = "md",
    type = "button",
    disabled = false,
    fullWidth = false,
    textColor,
    className = "",
  } = props;

  const colors = resolveColors(color, textColor);

  const style: ButtonStyle = {
    "--btn-bg": colors.bg,
    "--btn-fg": colors.fg,
    "--btn-border": colors.border,
    "--btn-hover-bg": colors.hoverBg,
    "--btn-hover-fg": colors.hoverFg,
    "--btn-hover-border": colors.hoverBorder,
  };

  const classes = [
    "lbu-btn",
    `lbu-btn--${variant}`,
    `lbu-btn--${size}`,
    fullWidth ? "lbu-btn--full" : "",
    disabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const label = text ?? children;

  // Render an anchor when href is supplied
  if ("href" in props && props.href !== undefined) {
    const { href, target, onClick, rel, download, ...linkProps } = props;

    if (disabled) {
      return (
        <a
          {...linkProps}
          className={classes}
          style={style}
          aria-disabled="true"
          tabIndex={-1}
        >
          {label}
        </a>
      );
    }

    return (
      <a
        {...linkProps}
        className={classes}
        style={style}
        href={href}
        target={target}
        rel={
          target === "_blank"
            ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
            : rel
        }
        download={download}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  // Otherwise, render a button
  const { onClick, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classes}
      style={style}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
