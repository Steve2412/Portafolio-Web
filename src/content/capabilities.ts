import type { IconType } from 'react-icons';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCodeBranch,
  FaRobot,
  FaDiagramProject,
  FaVial,
  FaShieldHalved,
} from 'react-icons/fa6';

export type CapabilityKey =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'versioning'
  | 'ai'
  | 'modeling'
  | 'testing'
  | 'security';

/** Orden en que se muestran las capacidades; los textos viven en los diccionarios. */
export const capabilities: { key: CapabilityKey; Icon: IconType }[] = [
  { key: 'frontend', Icon: FaCode },
  { key: 'backend', Icon: FaServer },
  { key: 'database', Icon: FaDatabase },
  { key: 'versioning', Icon: FaCodeBranch },
  { key: 'ai', Icon: FaRobot },
  { key: 'modeling', Icon: FaDiagramProject },
  { key: 'testing', Icon: FaVial },
  { key: 'security', Icon: FaShieldHalved },
];
