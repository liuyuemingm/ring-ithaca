import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import GlossaryCard from './GlossaryCard';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    backgroundColor: '#252525',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({

  root: {
    backgroundColor: '#222222',
    boxShadow: '0 6px 12px #111111',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 60,
    '&$expanded': {
      minHeight: 60,
    },

  },
  content: {
    '&$expanded': {
      margin: '8px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    color: 'white',
    background: '#303030',
    display: 'block',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(auto-fill, 320px)',
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  title0: {
    margin: '7px 30px 0',
    width: '10px',
    position: 'absolute',
    left: '65px'
  },
  title1: {
    margin: '7px 30px 0',
    width: '10px',
    position: 'absolute',
    left: '125px'
  },
  title2: {
    margin: '7px 30px 0',
    width: '10px',
    position: 'absolute',
    left: '175px'
  },

  arwHead: {
    width: '30px',
    position: 'relative',
    top: '4px',
    left: '15px',
    transition: '0.5s',
  },

  arwTail: {
    width: '280px',
    position: 'absolute',
    top: '16px',
    left: '-280px',
    // transform: `rotateX(180deg)`,
    transition: '0.5s',
  },

  summaryBar: {
    textShadow: '0 0 10px #7000ff, 0 0 10px #7000ff',
    color: '#C08FFF',
    fontFamily: 'Zengo',
    fontSize: '45px',
    lineHeight: '20px',
    '&:hover': {
      '& $arwHead': {
        left: '250px',
        opacity: '0.6'
      },
      '& $arwTail': {
        left: '0px',
        opacity: '0.6',
        // transform: `rotateX(0deg)`,
      }
    }
  }
}
))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();

  function accorSum(first, last) {
    return (
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className={classes.summaryBar}>
        <img src='images/arwHead.png' className={classes.arwHead} />
        <img src='images/arwTail.png' className={classes.arwTail} />
        <p className={classes.title0}>{first}</p> <p className={classes.title1}>~</p> <p className={classes.title2}>{last}</p>
      </AccordionSummary>)
  }

  return (
    <div >
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        {accorSum('A', 'E')}
        <AccordionDetails>
          <GlossaryCard>
            <h2>Advance</h2>
            <p>A step forward, leading with the forward foot, landing heel first.</p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Ballestra</h2>
            <p>
              A small jump intended to break up the pacing of an attacker's movement. The ballestra ends with both feet together as in a gain or retire, and typically continues into a lunge.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Bind</h2>
            <p>
              An armed attack on an opponent's weapon. From a parry, the defender takes control of the attacker's weapon and circles it over or under themself before casting the blade off (similar to a throw-off).
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Beat</h2>
            <p>
              A quick tap on the opponent's blade intended to draw it off-line in preparation for an attack.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Circle of Strength</h2>
            <p>
              The circle formed by holding one's hands as if one were holding a large ball; This is the position at which the muscles in one's hands are strongest and most able to resist displacement.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Corps-a-Corps</h2>
            <p>
              A situation in a fight where both opponents are armed and in physical contact, but not grappling.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Coupe</h2>
            <p>
              A small half-circle drawn clockwise with the tip of a weapon over an opponent's weapon, typically as a feint, disengage or envelopment. Contrast degrege.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Crossover</h2>
            <p>
              An advance or retreat, done by moving one foot up to, or past the other and then returning to a normal stance.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Degrege</h2>
            <p>
              A small half-circle drawn counter-clockwise with the tip of a weapon under an opponent's weapon, typically as a feint, disengage or envelopment. Contrast coupe.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Disengage</h2>
            <p>
              A small tip movement intended to circumvent a parry, or otherwise get around an opponent's blade, typically as a feint, or in preparation for an attack. Also describes a motion or maneuver intended to separate one from one's opponent.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>En-guarde in 3</h2>
            <p>
              The default single rapier stance: specifically refers to the rapier, which is held in a position that will deflect an attack 3. The rapier is held pronated, with the tip pointed roughly over the opponent's right shoulder and the blade aimed to the side and a little bit down. By default, the main-hand side's foot is forward, but see passed-back stance.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>En-guarde in 4</h2>
            <p>
              As en-guarde in 3, but the blade is held supenated and pointed at the opponent's left shoulder. In an en-guarde in 4 stance, all attacks except numeric attacks and puntas are performed supenated.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Envelopment</h2>
            <p>
              A tip movement (generally small, but sometimes large) intended to take control of the opponent's blade. An envelopment sometimes masquerades as an attack on the blade, as it may be used to counter an attack.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Evade</h2>
            <p>
              A defensive maneuver where the defender moves to avoid the attack rather than attempting to stop or deflect it. Contrast parry, ward; Sometimes combined with the same.
            </p>
          </GlossaryCard>

        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        {accorSum('F', 'J')}
        <AccordionDetails>
          <GlossaryCard>
            <h2>Feint</h2>
            <p>
              A partial attack made in order to goad an opponent into reacting to defend the attack prematurely, creating an opening.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Fletche</h2>
            <p>
              A running charge while staying in your stance.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Half-Strong</h2>
            <p>
              The part of a blade 1/4 to 1/2 of the way from the hilt. Contrast strong, weak, half-weak.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Half-Weak</h2>
            <p>
              The part of a blade 1/2 to 3/4 of the way from the hilt. Contrast strong, weak, half-strong.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Hanging Parry</h2>
            <p>
              A type of parry performed with a weapon, where the blade is held at an angle (roughly 45 degrees) towards the opponent, down (or up), and off to the side.
            </p>
          </GlossaryCard>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        {accorSum('K', 'O')}
        <AccordionDetails>
          <GlossaryCard>
            <h2>Line of Engagement</h2>
            <p>
              The imaginary line drawn between two combatants. Fights are said to be on a line if the line of engagement does not rotate or move (much). Going/Attacking off the line involves rotating the line of engagement.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Main-hand</h2>
            <p>
              A fighter's dominant hand, typically holding the (primary if applicable) weapon, or closer to the guard on a 2-handed blade.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Off-hand</h2>
            <p>
              A fighter's non-dominant hand, typically empty, holding a secondary weapon or shield, or closer to the pommel on a 2-handed blade.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Off-line</h2>
            <p>
              Of a sword or other weapon, particularly tip weapons; Aiming the weapon away from an opponent, that is, off the line of engagement. This is typically a less-threatening position, even if the weapon does not have a dangerous tip, as it may make certain parries harder to get to.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>On-point</h2>
            <p>
              Threatening your opponent with a tip-weapon, by holding it not-fully-extended and aiming at a vital organ.
            </p>
          </GlossaryCard>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        {accorSum('P', 'T')}
        <AccordionDetails>
          <GlossaryCard>
            <h2>Parry</h2>
            <p>
              A defensive move made to counter an attack. Though the term is used to describe all defensive counters (as opposed to evades), parry specifically refers to a defensive move that fully absorbs the impact of an attack. Contrast evade, ward. See also hanging parry.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Pass-back</h2>
            <p>
              Moving the leading foot behind the rear foot, and settling into a reversed stance.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Pass-forward</h2>
            <p>
              Moving the rear foot ahead of the leading foot, and settling into a reversed stance.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Passata-sotto</h2>
            <p>
              A defensive maneuver akin to an extremely low lunge; The defender drops below a charging attack and forms a line from his sword tip directly to his rear foot or hand (depending on type of passata-sotto), which absorbs the force of the attacker impaling themselves.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Passed-back stance</h2>
            <p>
              A reversed stance, with the off-hand foot leading. See En-guarde in 3.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Pattinando</h2>
            <p>
              A skip into a lunge. One's front foot is used to pull one's self forward into a quick crossover advance/fletche that leads into a lunge.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Pronated</h2>
            <p>
              A position of the hand with the palm pointing down. Opposite of supenated.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Punta-mendretti</h2>
            <p>
              An exaggerated thrusting attack meant to strike around the attacker's blade in a parry 4.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Punta-reverso</h2>
            <p>
              An exaggerated thrusting attack meant to strike around the attacker's blade in a parry 3.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Retreat</h2>
            <p>
              A step backward, leading with the rearward foot, subsequently lifting the front toe before the front heel.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Riposte</h2>
            <p>
              A rapid counterattack directly following a parry.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Stance</h2>
            <p>
              A posture or position adopted by a fighter; Each weapon/style has one or more stances associated with it.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Stopthrust</h2>
            <p>
              An attack over the blade aimed at the opponent's hand, wrist, or forearm. Typically performed with an evade as a counter to an attack.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Stramazzone</h2>
            <p>
              A slashing clear at the opponent's face. The goal is to open a small gash in the opponent's forehead so that blood runs into their eyes. Safely performed by slashing above the opponent's head. Evaded by leaning back and dropping the tip of one's sword.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Strong</h2>
            <p>
              The part of a blade closest to the hilt, generally ending about 1/4 of the way from the hilt. Contrast weak, half-strong, half-weak.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Supenated</h2>
            <p>
              A position of the hand with the palm pointing up. Opposite of pronated. Mnemonic: Your hand forms a cup from which you can drink soup.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Throw-off</h2>
            <p>
              An attack on the blade, cutting down the length of the blade but at a slightly outward angle. Often used immediately following a parry to throw the attacker off-line in preparation for a counterattack.
            </p>
          </GlossaryCard>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        {accorSum('U', 'Z')}
        <AccordionDetails>
          <GlossaryCard>
            <h2>Volte</h2>
            <p>
              A rotation about a central point, performed by leading with the foot opposite the direction being turned in and moving the other foot behind. Voltes are described by the foot leading the motion; a Volte right turns you left, and leaves your right foot in front afterwards. By default, a volte denotes a 90 degree rotation; A demi-volte is a 45 degree rotation, while a grande-volte is a 90 degree rotation. Performed correctly, voltes make it possible to rotate without losing balance. Voltes can also be used as evades, or to supplement binds.The default single rapier stance: specifically refers to the rapier, which is held in a position that will deflect an attack 3. The rapier is held pronated, with the tip pointed roughly over the opponent's right shoulder and the blade aimed to the side and a little bit down. By default, the main-hand side's foot is forward, but see passed-back stance.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Ward</h2>
            <p>
              A defensive move that deflects the impact of an attack away from the defender. Contrast parry.
            </p>
          </GlossaryCard>
          <GlossaryCard>
            <h2>Weak</h2>
            <p>
              The part of a blade closest to the tip, generally ending about 1/4 of the way from the tip. Contrast strong, half-strong, half-weak.
            </p>
          </GlossaryCard>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
