import React, { useState, useEffect } from "react";
import { Cluster } from "@potion/layout";
import { Svg, Circle, Group } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  return (
    <div className="bubble-wrap">
      <p>bubbles</p>
      <Svg width={400} height={800}>
        <Group transform={{ translate: [40, 80] }}>
        <Cluster 
          data={{
            children: bubbleData
          }}
            //sum={datum => datum.value}
            size={[240, 320]}
          
          //includeRoot={false}
            nodeEnter={d => ({ ...d, x: 0, y: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < colors.length) {
                  return (
                    <Circle
                      key={key}
                      cx={x}
                      cy={y}
                      r={10}
                      fill={colors[i].code.hex}
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
          }
          </Cluster >
          </Group>
      </Svg>
    </div>
  );
};

export default Bubbles;
