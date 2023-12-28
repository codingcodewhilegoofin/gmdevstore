

const Background = (props) => {


    return (
        <group name="20170707201828" position={[486.29, -43.26, 3]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
            <mesh
                name="1"
                geometry={props.nodes['1'].geometry}
                material={props.nodes['1'].material}
                castShadow
                receiveShadow
                position={[0, 0, 3]}
            >

            </mesh>
        </group>
    )

};

export default Background;