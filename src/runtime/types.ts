export type CenterAxis = 'horizontal' | 'vertical' | 'both'

export interface CenterDivProps {
  as?: keyof HTMLElementTagNameMap
  axis?: CenterAxis
  minBlockSize?: string
}
