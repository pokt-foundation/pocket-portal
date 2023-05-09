import { useState } from "react"
import {
  Group,
  Box,
  Collapse,
  Text,
  UnstyledButton,
  IconCaretRight,
  useMantineTheme,
} from "@pokt-foundation/pocket-blocks"
import { useLocation } from "@remix-run/react"

interface LinksGroupProps {
  initiallyOpened?: boolean
  label: string
  link: string
  links?: LinksGroupProps[]
  size?: string
  slug: string
}

const LinksGroup = ({
  initiallyOpened,
  label,
  link,
  links,
  size,
  slug,
}: LinksGroupProps) => {
  const [opened, setOpened] = useState(initiallyOpened || false)

  const location = useLocation()
  const isActive = location.pathname.includes(slug)

  const theme = useMantineTheme()

  const hasLinks = Array.isArray(links)

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      m={0}
      key={link.label}
      p="10.5px 32px"
      sx={{
        backgroundColor: isActive ? theme.colors.navy[4] : "transparent",
        color: isActive
          ? theme.colors.blue[5]
          : size === "lg"
          ? "#fff"
          : theme.colors.navy[0],
        fontSize: size === "lg" ? "18px" : "15px",
        fontWeight: size === "lg" ? "bold" : "normal",

        "&:hover": {
          backgroundColor: theme.colors.navy[4],
        },
      }}
    >
      <a href={link.link}>{link.label}</a>
    </Text>
  ))

  return (
    <>
      <UnstyledButton onClick={() => setOpened((opened) => !opened)}>
        <Group
          position="apart"
          spacing={0}
          sx={{
            backgroundColor: isActive ? theme.colors.navy[4] : "transparent",
            "&:hover": {
              backgroundColor: theme.colors.navy[4],
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Text
              m={0}
              p="16px 8px"
              sx={{
                color: isActive
                  ? theme.colors.blue[5]
                  : size === "lg"
                  ? "#fff"
                  : theme.colors.navy[0],
                fontSize: size === "lg" ? "18px" : "16px",
                fontWeight: size === "lg" ? "bold" : "normal",
              }}
            >
              <a href={link}>{label}</a>
            </Text>
          </Box>
          {hasLinks && (
            <IconCaretRight
              height="18px"
              width="18px"
              style={{
                transform: opened ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

export default LinksGroup
